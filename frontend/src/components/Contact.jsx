import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult("Sending...");

        // Create a FormData object to send to Web3 Forms
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("message", formData.message);
        formDataToSend.append("access_key", "b068c5af-8cbf-4daf-b83f-8c5ed83622be"); // Your Web3 Forms access key

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });
            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' }); // Reset form data
            } else {
                setResult(data.message || "Submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult("An error occurred. Please try again later.");
        }
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center my-10">
                {/* Left Section (Text) */}
                <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-0">
                    <div className="space-y-12">
                        <h1 className="text-4xl font-bold">
                            Contact Us
                        </h1>
                        <p className="text-xl">
                            We would love to hear from you! If you have any questions, comments, or suggestions, feel free to reach out to us using the form below.
                        </p>
                        {submitted && (
                            <div className="mb-4 p-2 bg-green-200 text-green-800 rounded">
                                Thank you for your message! We'll get back to you soon.
                            </div>
                        )}
                        {result && (
                            <div className="mb-4 p-2 bg-red-200 text-red-800 rounded">
                                {result}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Section (Form) */}
                <div className="w-full md:w-1/2 md:order-2 flex justify-center">
                    <form onSubmit={handleSubmit} className="w-full max-w-md">
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <button type="submit" className="btn mt-6 btn-active btn-secondary">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;