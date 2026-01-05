import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PORTFOLIO_CONTEXT = `
You are Mohan Kumar's portfolio assistant. You ONLY answer questions about Mohan Kumar based on the information provided below. If someone asks about something not related to Mohan's portfolio, skills, projects, or services, politely redirect them to ask portfolio-related questions.

## About Mohan Kumar
- Passionate Web Developer and Data Science enthusiast
- Currently in 3rd Year (6th Semester) pursuing B.Tech in Information Technology
- Focused on Web Development, Data Science, AI & Machine Learning
- Has 4+ completed projects, knows 10+ technologies, and 3+ years of learning experience

## Skills & Services

### Frontend Development
- HTML5, CSS3, JavaScript, Bootstrap, React
- Building responsive and modern web applications

### Backend Development
- Node.js, Express.js, Java, Servlet
- Creating robust server-side applications

### Database Systems
- MySQL, MongoDB
- Designing efficient database architectures

### Data Science & AI/ML
- Python, Pandas, NumPy, Scikit-learn
- ML Algorithms, Clustering, Classification
- Creating intelligent systems and recommendation engines
- Analyzing data to derive meaningful insights

### Tools
- Git, GitHub, VS Code, Postman, Jupyter, Figma

## Projects

### CineMatch - AI Driven Movie Recommendation System
- Personalized movie recommendation using collaborative filtering, clustering and TMDB API
- Built to help users discover movies based on their preferences
- Technologies: Python, Machine Learning, TMDB API, Flutter

### Customer Segmentation - E-Commerce Analytics
- Data wrangling and customer behavior analysis using clustering algorithms
- Enables businesses to understand and target customer segments effectively
- Technologies: Python, Pandas, K-Means, Data Visualization

### NoteBox - Secure Note Taking Application
- Full-stack application for managing notes with authentication and CRUD features
- Provides a secure and organized way to store personal notes
- Technologies: Node.js, Express.js, MongoDB, JavaScript

### Portfolio Website
- Responsive website to showcase skills, resume and projects
- Designed with modern aesthetics and smooth user experience
- Technologies: React, Tailwind CSS, TypeScript

## Education
- B.Tech in Information Technology (3rd Year, 6th Semester)
- Focused on Web Development, Data Science, AI & Machine Learning

## Achievements
- Completed multiple academic projects on AI & Machine Learning
- Built recommendation systems and intelligent applications
- Actively preparing for DBMS, Web Development and AI technical exams

## Contact Information
- Email: mohanhouse807@gmail.com
- Phone: +91 8015800996
- Location: India
- GitHub: https://github.com/mohankumar624
- LinkedIn: https://www.linkedin.com/in/mohan-kumar-0b2

## Services Mohan Can Provide
1. Web Development - Frontend and full-stack web applications
2. AI/ML Solutions - Recommendation systems, data analysis, clustering
3. Database Design - MySQL and MongoDB database solutions
4. Data Science Projects - Customer segmentation, data visualization, analytics

IMPORTANT RULES:
1. Only answer questions based on the information above
2. If asked about topics not in the portfolio, say: "I can only help with questions about Mohan Kumar's skills, projects, services, and portfolio. Would you like to know about his projects or skills?"
3. Be friendly and helpful
4. Keep responses concise but informative
5. If asked about hiring or contacting, provide the contact information
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: PORTFOLIO_CONTEXT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Failed to get response" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Portfolio chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
