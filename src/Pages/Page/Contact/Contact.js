import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { AiOutlineHome, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const form = useRef();

    const onSubmit = (data, e) => {
        e.preventDefault();
        if (data) {
            console.log(data);
            emailjs.sendForm('service_in1qsac', 'template_610d6re', form.current, 's0NHrI-rKvn9ej2TD')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        };

        reset();
    };
    return (
        <section className=' px-5  py-10' id='contact'>
            <div className=' pl-5'>
                <h1 className='text-accent text-5xl text-center font-bold my-12'>Contact Us</h1>
            </div>

            <div class="hero mt-10" >

                <div class="hero-content flex-col-reverse lg:flex-row-reverse ">
                    <div class="text-center  lg:text-left pl-5 " >
                        <h3 className='text-4xl text-bold text-accent'>Our Address</h3>
                        <p class="py-6 ">Feel free to Send us an email if you think We can help you out with any of Our Tools or Service realated Problems.</p>
                        <div>
                            <div className='text-2xl flex flex-row items-center mb-3'>
                                <AiOutlineHome ></AiOutlineHome>
                                <p className='ml-3'>Dak-Bangla, Khulna, Bangladesh</p>
                            </div>
                            <div className='text-2xl flex flex-row items-center mb-3'>
                                <AiOutlineMail></AiOutlineMail>
                                <p className='ml-3'>khulnaTools1@gmail.com</p>
                            </div>
                            <div className='text-2xl flex flex-row items-center'>
                                <AiFillPhone></AiFillPhone>
                                <p className='ml-3'>+880 1730XXXXXX</p>
                            </div>

                        </div>
                    </div>

                    <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <form class="card-body" ref={form} onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type='text' placeholder='name' {...register("name")} class="input input-bordered input-accent w-full text-black" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type='email' placeholder='email'{...register("email")} class="input input-bordered input-accent w-full text-black" required />
                            </div>


                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Subject</span>
                                </label>
                                <input type='text' placeholder='subject'{...register("subject")} class="input input-bordered input-accent w-full text-black" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <textarea placeholder='message'{...register("message")} class="textarea textarea-accent text-black" required />
                            </div>

                            <div class="form-control mt-6">
                                <button class="btn btn-accent" type="submit" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;