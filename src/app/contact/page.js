import Image from "next/image";

export default function Page() {
    return (<>

        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Contact Form</title>
            <style dangerouslySetInnerHTML={{ __html: "\n        body {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            margin: 0;\n            background-color: #f4f4f4;\n            font-family: Arial, sans-serif;\n        }\n\n        .contact-card {\n            background-color: #ffffff;\n            padding: 20px;\n            border-radius: 10px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            width: 300px;\n        }\n\n        .contact-card h2 {\n            text-align: center;\n            margin-bottom: 20px;\n        }\n\n        .contact-card label {\n            display: block;\n            margin-bottom: 5px;\n            font-weight: bold;\n        }\n\n        .contact-card input[type=\"text\"],\n        .contact-card input[type=\"email\"],\n        .contact-card textarea {\n            width: 100%;\n            padding: 10px;\n            margin-bottom: 15px;\n            border: 1px solid #ccc;\n            border-radius: 5px;\n            box-sizing: border-box;\n        }\n\n        .contact-card textarea {\n            resize: vertical;\n            height: 100px;\n        }\n\n        .contact-card button {\n            width: 100%;\n            padding: 10px;\n            background-color: #007BFF;\n            border: none;\n            border-radius: 5px;\n            color: white;\n            font-size: 16px;\n            cursor: pointer;\n        }\n\n        .contact-card button:hover {\n            background-color: #0056b3;\n        }\n    " }} />
            <div className="contact-card">
                <h2>ติดต่อเรา</h2>
                <form id="contactForm">
                    <label htmlFor="name">ชื่อ</label>
                    <input type="text" id="name" name="name" placeholder="ชื่อ..." required />
                    <label htmlFor="email">อีเมล</label>
                    <input type="email" id="email" name="email" placeholder="อีเมลของคุณ.." required />
                    <label htmlFor="message">ข้อความ</label>
                    <textarea id="message" name="message" placeholder="คำแนะนำที่อยากจะให้ร้านเราปรับเพิ่มเติม.." required defaultValue={""} />
                    <button type="submit">ส่งข้อความ</button>
                </form>
            </div>
        </div>

    </>
    );
}
