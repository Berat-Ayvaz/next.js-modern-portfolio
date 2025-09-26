import React, { useState } from 'react'
import { assets } from '@/public/assets/assets'
import Image from 'next/image';
const Contact = () => {
    const [result, setResult] = useState("");

    // Onsubmit fonksiyonu
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending...");

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        formData.append("access_key", "dff74c4d-78cf-4b94-8418-e828ace94212");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            form.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='Contact-me' className='w-full px-[12%] py-10 scroll-mt-20 '
            style={{
                backgroundImage: "url('/footer-bg.png')",
                backgroundSize: '90% auto'
            }}>
            <h4 className='text-center mb-2 text-lg font-ovo'>Connect with me</h4>
            <h2 className='text-center text-5xl font-ovo'>Get in touch</h2>
            <p className='max-w-xl mx-auto font-ovo text-center '>I`d love to hear from you! If you have any questions, comments or
                feedback, please use the form below. </p>
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto-fit gap-6 mt-5 mb-8'>
                    <input type="text" placeholder='Enter your name' required
                        className='flex-1 p-3 outline-none border-[0.5px] rounded-md border-gray-400 bg-white' name='name' />
                    <input type="email" placeholder='Enter your email' required
                        className='flex-1 p-3 outline-none border-[0.5px] rounded-md border-gray-400 bg-white' name='email' />
                </div>
                <textarea rows={6} placeholder='Enter your message' required
                    className='w-full p-4 outline-none border-[0.5px] rounded-md border-gray-400 bg-white mb-6' name='message'></textarea>
                <button type='submit'
                    className='flex items-center justify-between border-[0.5px] border-gray-400 rounded-full px-8 w-max py-3
                     cursor-pointer bg-black/80 text-white mx-auto gap-2 hover:bg-black duration-500'>
                    Submit now <Image
                        src={assets.right_arrow}
                        alt='Right icon' className='w-4'
                    />
                </button>
            </form>
             <p>Hello world</p>
        </div>
    )
}

export default Contact
