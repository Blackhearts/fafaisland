;(function(){
  document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("contact-form");
    if (!form) return;

    const statusEl = document.createElement("div");
    statusEl.id = "contact-status";
    statusEl.style.marginTop = "12px";
    form.appendChild(statusEl);

    form.addEventListener("submit", async function(e){
      e.preventDefault();
      statusEl.textContent = "Sending...";
      statusEl.style.color = "#555";

      const name = (document.getElementById("name")||{}).value || "";
      const email = (document.getElementById("email")||{}).value || "";
      const subject = (document.getElementById("subject")||{}).value || "";
      const message = (document.getElementById("message")||{}).value || "";

      if (!window.sb) {
        statusEl.textContent = "Supabase not initialized. Check js/supabaseClient.js";
        statusEl.style.color = "crimson";
        return;
      }

      try {
        const { data, error } = await window.sb
          .from("contact_messages")
          .insert({ name, email, subject, message });

        if (error) throw error;
        form.reset();
        statusEl.textContent = "Thanks! Your message has been sent.";
        statusEl.style.color = "green";
      } catch (err) {
        console.error(err);
        statusEl.textContent = "Oops, something went wrong. Please try again.";
        statusEl.style.color = "crimson";
      }
    });
  });
})();
