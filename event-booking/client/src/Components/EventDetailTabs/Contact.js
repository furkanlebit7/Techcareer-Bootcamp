import React, { useState } from "react";

//Packages
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({ email: "", subject: "", message: "" });

  const suc = () =>
    toast.success(
      "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız."
    );
  const er = () =>
    toast.error(
      "Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz."
    );

  const handleSubmit = () => {
    if (
      form.email.length > 0 &&
      form.subject.length > 0 &&
      form.message.length > 0
    ) {
      suc();
      setForm({ email: "", subject: "", message: "" });
    } else {
      er();
    }
  };
  return (
    <section className="bg-white dark:bg-darkContent">
      <div className="px-4 mx-auto max-w-screen-md">
        <form className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-darkMain dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-darkMain dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-darkMain dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            onClick={() => handleSubmit()}
            type="button"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-pinky sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
