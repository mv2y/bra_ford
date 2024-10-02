document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // منع الإرسال الفوري للنموذج
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // يمكنك معالجة البيانات هنا (مثلاً إرسالها إلى الخادم)
    const responseMessage = `شكرًا، ${name}! سنقوم بالرد عليك عبر البريد الإلكتروني: ${email}.`;
    
    const responseDiv = document.getElementById("form-response");
    responseDiv.innerText = responseMessage;
    responseDiv.classList.remove("hidden");

    // إعادة تعيين النموذج
    document.getElementById("contact-form").reset();
});
