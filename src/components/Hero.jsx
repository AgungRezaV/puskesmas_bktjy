import React, { useEffect } from 'react';
import styles from '../style';
import { doctor, wavesNegatives } from '../assets';
import Button from './Button';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 5000, easing: "ease-in-out-back", });
    }, []);

    return (
        <section id='home' className={`flex md:flex-row flex-col relative bg-blue-50`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 px-12`} data-aos='fade-right'>
                <div className='flex flex-col justify-between items-center w-full'>
                    <h1 className='flex-1 font-poppins font-normal ss:text-[72px] text-[42px] ss:mt-0 mt-6'>
                        Web
                        <span className='text-blue-900 font-bold'> Stunting</span> {' '}
                    </h1>
                </div>

                <p
                    className={`${styles.paragraph} text-justify max-w-[900px] mt-5 text-gray-900`}
                    data-aos='fade-up'
                    data-aos-delay='300'
                >
                    Web stunting adalah sebuah situs yang diluncurkan oleh mahasiswa kesehatan masyarakat UIN Syarif Hidayatullah
                    Jakarta untuk menyebarkan informasi tentang stunting serta langkah pencegahannya kepada ibu hamil dan ibu yang
                    memiliki balita di Kelurahan Bakti Jaya khususnya dan secara umum untuk masyarakat yang mengunjungi situs ini.
                    <br /> <br />
                    Situs ini juga dilengkapi dengan fitur konsultasi kepada petugas gizi di Puskesmas Bakti Jaya untuk memudahkan
                    akses informasi yang dibutuhkan segera. Tersedianya situs ini diharapkan dapat meningkatkan pengetahuan dan
                    kewaspadaan dalam mencegah stunting pada balita.
                </p>

                <a href='https://wa.me/+6289512969942'>
                    <Button styles='mt-5' />
                </a>
            </div>

            <div data-aos='fade-left'>
                <img src={doctor} alt='doctor' className='md:w-[100%] w-[50%] md:h-[100%] h-[50%] center relative z-[5]' />
            </div>
        </section>
    );
};

export default Hero;
