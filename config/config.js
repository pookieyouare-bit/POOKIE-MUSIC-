/**
 * OpenSource 2026 Mubarak 
 * Code by itsfizys
 * Mubarak Development
 * 
 * POOKIE MUSIC Bot Configuration
 * Update these URLs to configure your bot's support server and invite links
 */

const CONFIG = {
  // Bot invite link - users will be redirected here when clicking "Invite Kali Billi"
  botInviteUrl: "https://discord.com/oauth2/authorize?client_id=1511025355824173246&permissions=8&integration_type=0&scope=bot",
  
  // Support server invite link - users will be redirected here for support
  supportServerUrl: "https://discord.gg/nEBYj9E8g2",
  
  // Bot name (for display)
  botName: "Kali Billi",
  
  // Bot description
  botDescription: "Your Cute Discord Companion - Fun, moderation, and AI chat for your Discord server."
};

// Export for use in browsers
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
