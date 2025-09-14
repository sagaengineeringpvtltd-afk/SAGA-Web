export const sendContactForm = async (formData) => {
    if (!formData) {
      return;
    }
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
    }
  };
  