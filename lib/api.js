export const sendContactForm = async (formData) => {
    if (!formData) {
      console.error("formData is undefined or null");
      return;
    }
    console.log("hit:", formData);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
  
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  