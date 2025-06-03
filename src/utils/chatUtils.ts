
import { mcaKnowledgeBase } from '@/data/mcaKnowledgeBase';

export const findBestMatch = (userInput: string, knowledgeBase: any): string => {
  const input = userInput.toLowerCase();
  
  // Common greetings
  const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'];
  if (greetings.some(greeting => input.includes(greeting))) {
    return "Hello! I'm here to help you with questions about GoDaddy Capital's Merchant Cash Advance program. What would you like to know?";
  }
  
  // Search through all categories and topics
  let bestMatch = '';
  let highestScore = 0;
  
  Object.values(knowledgeBase).forEach((category: any) => {
    Object.values(category).forEach((topic: any) => {
      const keywords = topic.keywords || [];
      let score = 0;
      
      // Calculate relevance score based on keyword matches
      keywords.forEach((keyword: string) => {
        const keywordLower = keyword.toLowerCase();
        
        // Exact phrase match gets highest score
        if (input.includes(keywordLower)) {
          score += keyword.split(' ').length * 3;
        }
        
        // Individual word matches get lower score
        keyword.split(' ').forEach(word => {
          if (input.includes(word.toLowerCase()) && word.length > 2) {
            score += 1;
          }
        });
      });
      
      if (score > highestScore) {
        highestScore = score;
        bestMatch = topic.answer;
      }
    });
  });
  
  // If no good match found, provide a helpful default response
  if (highestScore === 0) {
    return `I'd be happy to help you with information about GoDaddy Capital! Here are some topics I can assist with:

• What is GoDaddy Capital and how it works
• Eligibility requirements and application process
• Offers, fees, and repayment terms
• Account management and balance tracking
• Funding partners and contact information

Please feel free to ask a specific question about any of these topics, and I'll provide detailed information to help you understand our Merchant Cash Advance program.`;
  }
  
  return bestMatch;
};
