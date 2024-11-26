import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://sisednxnfwuvhtmtvaxn.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpc2VkbnhuZnd1dmh0bXR2YXhuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjU4MzIzOSwiZXhwIjoyMDQ4MTU5MjM5fQ.xj8oGS4pdaaXAi_sRaN8gCFdb2jTyGgKx1ClI_veO4w",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpc2VkbnhuZnd1dmh0bXR2YXhuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjU4MzIzOSwiZXhwIjoyMDQ4MTU5MjM5fQ.xj8oGS4pdaaXAi_sRaN8gCFdb2jTyGgKx1ClI_veO4w"
    }
})