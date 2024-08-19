export default function Footer() {
    return (
        <footer>
            <div className="container-fluid bg-white">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>รายการ</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        หน้าแรก
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        เมนู
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        สั่งอาหาร
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        ชำระเงิน
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        เกี่ยวกับ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>อยากเสนออะไรเพิ่มเติม</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">
                                        Email address
                                    </label>
                                    <input
                                        id="newsletter1"
                                        type="text"
                                        className="form-control"
                                        placeholder="Email address"
                                    />
                                    <button className="btn btn-primary" type="button">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
                    </footer>

                    </div>
                    </footer >
    )
}
