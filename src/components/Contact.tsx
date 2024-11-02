const Contact = () => {
    return (
        <section id="contact" className="relative overflow-hidden bg-grey-900">
            <div className="z-10 absolute left-[5%] bottom-0 opacity-25 w-[120px] h-[120px] rounded-full blur bg-gradient-to-r from-primary to-primary-dark flex-center transform translate-y-[30px] -translate-x-[60px]">
                <div className="z-10 bg-grey-900 rounded-full w-[90px] h-[90px] relative"></div>
            </div>
            <div className="relative z-20 container mx-auto max-w-7xl common-padding flex-center gap-6">
                <div className="flex flex-col justify-center gap-12">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex gap-2">
                            <h2 className="heading-4 lg:heading-2 text-white">Contact</h2>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="none"
                                className="w-6 h-6 lg:w-8 lg:h-8 transform -translate-y-1/3"
                            >
                                <path
                                    d="M22.6976 15.1325L16.2463 12.7575L13.8713 6.30125C13.7307 5.91916 13.4762 5.58941 13.1423 5.35648C12.8083 5.12356 12.411 4.99867 12.0038 4.99867C11.5967 4.99867 11.1993 5.12356 10.8654 5.35648C10.5314 5.58941 10.277 5.91916 10.1363 6.30125L7.75883 12.75L1.30258 15.125C0.920493 15.2656 0.59074 15.5201 0.357814 15.854C0.124888 16.188 0 16.5853 0 16.9925C0 17.3997 0.124888 17.797 0.357814 18.131C0.59074 18.4649 0.920493 18.7194 1.30258 18.86L7.75008 21.25L10.1251 27.7025C10.2657 28.0846 10.5202 28.4143 10.8541 28.6473C11.1881 28.8802 11.5854 29.0051 11.9926 29.0051C12.3997 29.0051 12.7971 28.8802 13.131 28.6473C13.465 28.4143 13.7194 28.0846 13.8601 27.7025L16.2351 21.2512L22.6913 18.8762C23.0734 18.7356 23.4032 18.4811 23.6361 18.1472C23.869 17.8133 23.9939 17.4159 23.9939 17.0088C23.9939 16.6016 23.869 16.2042 23.6361 15.8703C23.4032 15.5364 23.0734 15.2819 22.6913 15.1413L22.6976 15.1325ZM15.5488 19.375C15.2786 19.4742 15.0332 19.631 14.8296 19.8345C14.6261 20.0381 14.4693 20.2835 14.3701 20.5537L11.9951 26.9862L9.62508 20.5487C9.52582 20.2799 9.3695 20.0358 9.16688 19.8332C8.96426 19.6306 8.72014 19.4743 8.45133 19.375L2.01883 17L8.45133 14.625C8.72014 14.5257 8.96426 14.3694 9.16688 14.1668C9.3695 13.9642 9.52582 13.7201 9.62508 13.4513L12.0001 7.01875L14.3751 13.4513C14.4743 13.7215 14.6311 13.9669 14.8346 14.1705C15.0382 14.374 15.2836 14.5308 15.5538 14.63L21.9863 17.005L15.5488 19.375ZM16.0001 4C16.0001 3.73478 16.1054 3.48043 16.293 3.29289C16.4805 3.10536 16.7349 3 17.0001 3H19.0001V1C19.0001 0.734784 19.1054 0.48043 19.293 0.292893C19.4805 0.105357 19.7349 0 20.0001 0C20.2653 0 20.5197 0.105357 20.7072 0.292893C20.8947 0.48043 21.0001 0.734784 21.0001 1V3H23.0001C23.2653 3 23.5197 3.10536 23.7072 3.29289C23.8947 3.48043 24.0001 3.73478 24.0001 4C24.0001 4.26522 23.8947 4.51957 23.7072 4.70711C23.5197 4.89464 23.2653 5 23.0001 5H21.0001V7C21.0001 7.26522 20.8947 7.51957 20.7072 7.70711C20.5197 7.89464 20.2653 8 20.0001 8C19.7349 8 19.4805 7.89464 19.293 7.70711C19.1054 7.51957 19.0001 7.26522 19.0001 7V5H17.0001C16.7349 5 16.4805 4.89464 16.293 4.70711C16.1054 4.51957 16.0001 4.26522 16.0001 4ZM29.0001 10C29.0001 10.2652 28.8947 10.5196 28.7072 10.7071C28.5197 10.8946 28.2653 11 28.0001 11H27.0001V12C27.0001 12.2652 26.8947 12.5196 26.7072 12.7071C26.5197 12.8946 26.2653 13 26.0001 13C25.7349 13 25.4805 12.8946 25.293 12.7071C25.1054 12.5196 25.0001 12.2652 25.0001 12V11H24.0001C23.7349 11 23.4805 10.8946 23.293 10.7071C23.1054 10.5196 23.0001 10.2652 23.0001 10C23.0001 9.73478 23.1054 9.48043 23.293 9.29289C23.4805 9.10536 23.7349 9 24.0001 9H25.0001V8C25.0001 7.73478 25.1054 7.48043 25.293 7.29289C25.4805 7.10536 25.7349 7 26.0001 7C26.2653 7 26.5197 7.10536 26.7072 7.29289C26.8947 7.48043 27.0001 7.73478 27.0001 8V9H28.0001C28.2653 9 28.5197 9.10536 28.7072 9.29289C28.8947 9.48043 29.0001 9.73478 29.0001 10Z"
                                    fill="#82E6AB"
                                />
                            </svg>
                        </div>
                        <p className="text-lg lg:paragraph-16 text-white text-center lg:text-left">
                            Feel free to get in touch, it will be a great pleasure to be able to help you with your project, contact me now!
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex gap-2 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                                <path
                                    d="M25 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H24C24.5304 20 25.0391 19.7893 25.4142 19.4142C25.7893 19.0391 26 18.5304 26 18V1C26 0.734784 25.8946 0.48043 25.7071 0.292893C25.5196 0.105357 25.2652 0 25 0ZM13 10.6437L3.57125 2H22.4287L13 10.6437ZM9.33875 10L2 16.7262V3.27375L9.33875 10ZM10.8188 11.3563L12.3188 12.7375C12.5032 12.9069 12.7446 13.0008 12.995 13.0008C13.2454 13.0008 13.4868 12.9069 13.6712 12.7375L15.1712 11.3563L22.4212 18H3.57125L10.8188 11.3563ZM16.6612 10L24 3.2725V16.7275L16.6612 10Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <p className="paragraph-16 text-white">(12) 98765 - 4321</p>
                        </div>
                        <div className="flex gap-2 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                                <path
                                    d="M25 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H24C24.5304 20 25.0391 19.7893 25.4142 19.4142C25.7893 19.0391 26 18.5304 26 18V1C26 0.734784 25.8946 0.48043 25.7071 0.292893C25.5196 0.105357 25.2652 0 25 0ZM13 10.6437L3.57125 2H22.4287L13 10.6437ZM9.33875 10L2 16.7262V3.27375L9.33875 10ZM10.8188 11.3563L12.3188 12.7375C12.5032 12.9069 12.7446 13.0008 12.995 13.0008C13.2454 13.0008 13.4868 12.9069 13.6712 12.7375L15.1712 11.3563L22.4212 18H3.57125L10.8188 11.3563ZM16.6612 10L24 3.2725V16.7275L16.6612 10Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <p className="paragraph-16 text-white">(12) 98765 - 4321</p>
                        </div>
                        <div className="flex gap-2 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                                <path
                                    d="M25 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H24C24.5304 20 25.0391 19.7893 25.4142 19.4142C25.7893 19.0391 26 18.5304 26 18V1C26 0.734784 25.8946 0.48043 25.7071 0.292893C25.5196 0.105357 25.2652 0 25 0ZM13 10.6437L3.57125 2H22.4287L13 10.6437ZM9.33875 10L2 16.7262V3.27375L9.33875 10ZM10.8188 11.3563L12.3188 12.7375C12.5032 12.9069 12.7446 13.0008 12.995 13.0008C13.2454 13.0008 13.4868 12.9069 13.6712 12.7375L15.1712 11.3563L22.4212 18H3.57125L10.8188 11.3563ZM16.6612 10L24 3.2725V16.7275L16.6612 10Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <p className="paragraph-16 text-white">andrei.teculescu@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-primary justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                            <path
                                d="M26.0387 6.46002C26.3444 5.47401 26.4425 4.43537 26.3267 3.40958C26.211 2.3838 25.8839 1.39312 25.3662 0.500016C25.2785 0.347964 25.1522 0.221705 25.0001 0.133935C24.8481 0.0461646 24.6756 -2.30667e-05 24.5 1.63642e-05C23.3352 -0.00242167 22.186 0.267596 21.1442 0.788497C20.1024 1.3094 19.1969 2.06674 18.5 3.00002H15.5C14.8031 2.06674 13.8976 1.3094 12.8558 0.788497C11.814 0.267596 10.6648 -0.00242167 9.5 1.63642e-05C9.32443 -2.30667e-05 9.15193 0.0461646 8.99987 0.133935C8.84781 0.221705 8.72154 0.347964 8.63375 0.500016C8.11606 1.39312 7.78903 2.3838 7.67329 3.40958C7.55754 4.43537 7.65559 5.47401 7.96125 6.46002C7.34341 7.53841 7.01245 8.75723 7 10V11C7.0021 12.692 7.61634 14.3261 8.72928 15.6006C9.84222 16.875 11.3787 17.7038 13.055 17.9338C12.3708 18.8093 11.9994 19.8888 12 21V22H9C8.20435 22 7.44129 21.6839 6.87868 21.1213C6.31607 20.5587 6 19.7957 6 19C6 18.3434 5.87067 17.6932 5.6194 17.0866C5.36812 16.48 4.99983 15.9288 4.53553 15.4645C4.07124 15.0002 3.52005 14.6319 2.91342 14.3806C2.30679 14.1293 1.65661 14 1 14C0.734784 14 0.48043 14.1054 0.292893 14.2929C0.105357 14.4804 0 14.7348 0 15C0 15.2652 0.105357 15.5196 0.292893 15.7071C0.48043 15.8947 0.734784 16 1 16C1.79565 16 2.55871 16.3161 3.12132 16.8787C3.68393 17.4413 4 18.2044 4 19C4 20.3261 4.52678 21.5979 5.46447 22.5356C6.40215 23.4732 7.67392 24 9 24H12V26C12 26.2652 12.1054 26.5196 12.2929 26.7071C12.4804 26.8947 12.7348 27 13 27C13.2652 27 13.5196 26.8947 13.7071 26.7071C13.8946 26.5196 14 26.2652 14 26V21C14 20.2044 14.3161 19.4413 14.8787 18.8787C15.4413 18.3161 16.2044 18 17 18C17.7956 18 18.5587 18.3161 19.1213 18.8787C19.6839 19.4413 20 20.2044 20 21V26C20 26.2652 20.1054 26.5196 20.2929 26.7071C20.4804 26.8947 20.7348 27 21 27C21.2652 27 21.5196 26.8947 21.7071 26.7071C21.8946 26.5196 22 26.2652 22 26V21C22.0006 19.8888 21.6292 18.8093 20.945 17.9338C22.6213 17.7038 24.1578 16.875 25.2707 15.6006C26.3837 14.3261 26.9979 12.692 27 11V10C26.9875 8.75723 26.6566 7.53841 26.0387 6.46002ZM25 11C25 12.3261 24.4732 13.5979 23.5355 14.5356C22.5979 15.4732 21.3261 16 20 16H14C12.6739 16 11.4021 15.4732 10.4645 14.5356C9.52678 13.5979 9 12.3261 9 11V10C9.01226 9.00005 9.31164 8.02467 9.8625 7.19002C9.96519 7.05467 10.0317 6.89538 10.0558 6.7272C10.0798 6.55902 10.0606 6.38748 10 6.22877C9.73953 5.55701 9.61417 4.84046 9.63112 4.12018C9.64806 3.39989 9.80698 2.69003 10.0988 2.03127C10.9171 2.11931 11.7052 2.39041 12.4046 2.82448C13.104 3.25855 13.6966 3.84446 14.1388 4.53877C14.2288 4.67965 14.3528 4.79569 14.4994 4.87627C14.6459 4.95685 14.8103 4.99939 14.9775 5.00002H19.0212C19.1891 5.00002 19.3543 4.95777 19.5015 4.87716C19.6487 4.79656 19.7733 4.68018 19.8638 4.53877C20.3058 3.84439 20.8985 3.25844 21.5978 2.82436C22.2972 2.39029 23.0853 2.11922 23.9037 2.03127C24.1951 2.69019 24.3536 3.40014 24.3701 4.12043C24.3866 4.84071 24.2609 5.55718 24 6.22877C23.9396 6.38596 23.9193 6.55576 23.9412 6.72275C23.963 6.88974 24.0262 7.04864 24.125 7.18502C24.6813 8.01967 24.9851 8.99706 25 10V11Z"
                                fill="currentColor"
                            />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                            <path
                                d="M25 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H24C24.5304 20 25.0391 19.7893 25.4142 19.4142C25.7893 19.0391 26 18.5304 26 18V1C26 0.734784 25.8946 0.48043 25.7071 0.292893C25.5196 0.105357 25.2652 0 25 0ZM13 10.6437L3.57125 2H22.4287L13 10.6437ZM9.33875 10L2 16.7262V3.27375L9.33875 10ZM10.8188 11.3563L12.3188 12.7375C12.5032 12.9069 12.7446 13.0008 12.995 13.0008C13.2454 13.0008 13.4868 12.9069 13.6712 12.7375L15.1712 11.3563L22.4212 18H3.57125L10.8188 11.3563ZM16.6612 10L24 3.2725V16.7275L16.6612 10Z"
                                fill="currentColor"
                            />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path
                                d="M24 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V24C0 24.5304 0.210714 25.0391 0.585786 25.4142C0.960859 25.7893 1.46957 26 2 26H24C24.5304 26 25.0391 25.7893 25.4142 25.4142C25.7893 25.0391 26 24.5304 26 24V2C26 1.46957 25.7893 0.960859 25.4142 0.585786C25.0391 0.210714 24.5304 0 24 0ZM24 24H2V2H24V24ZM9 11V19C9 19.2652 8.89464 19.5196 8.70711 19.7071C8.51957 19.8946 8.26522 20 8 20C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V11C7 10.7348 7.10536 10.4804 7.29289 10.2929C7.48043 10.1054 7.73478 10 8 10C8.26522 10 8.51957 10.1054 8.70711 10.2929C8.89464 10.4804 9 10.7348 9 11ZM20 14.5V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20C18.7348 20 18.4804 19.8946 18.2929 19.7071C18.1054 19.5196 18 19.2652 18 19V14.5C18 13.837 17.7366 13.2011 17.2678 12.7322C16.7989 12.2634 16.163 12 15.5 12C14.837 12 14.2011 12.2634 13.7322 12.7322C13.2634 13.2011 13 13.837 13 14.5V19C13 19.2652 12.8946 19.5196 12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071C11.1054 19.5196 11 19.2652 11 19V11C11.0012 10.7551 11.0923 10.5191 11.256 10.3369C11.4197 10.1546 11.6446 10.0388 11.888 10.0114C12.1314 9.98392 12.3764 10.0468 12.5765 10.188C12.7767 10.3292 12.918 10.539 12.9738 10.7775C13.6502 10.3186 14.4389 10.0526 15.2552 10.0081C16.0714 9.96368 16.8844 10.1424 17.6067 10.5251C18.329 10.9078 18.9335 11.48 19.3551 12.1803C19.7768 12.8806 19.9997 13.6825 20 14.5ZM9.5 7.5C9.5 7.79667 9.41203 8.08668 9.2472 8.33335C9.08238 8.58003 8.84811 8.77229 8.57403 8.88582C8.29994 8.99935 7.99834 9.02906 7.70736 8.97118C7.41639 8.9133 7.14912 8.77044 6.93934 8.56066C6.72956 8.35088 6.5867 8.08361 6.52882 7.79264C6.47094 7.50166 6.50065 7.20006 6.61418 6.92597C6.72771 6.65189 6.91997 6.41762 7.16665 6.2528C7.41332 6.08797 7.70333 6 8 6C8.39782 6 8.77936 6.15804 9.06066 6.43934C9.34196 6.72064 9.5 7.10218 9.5 7.5Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
