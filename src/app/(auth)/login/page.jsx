import React from 'react';

const page = () => {
    return (
        <div>
            <form>
                <div className="hero bg-base-200 w-full ">
                    <div className="card bg-base-100 w-full shadow-2xl">
                        <div className="card-body w-full">
                            <fieldset className="fieldset w-full">
                                <label className="label">Email</label>
                                <input type="email" className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </form>

        </div >
    );
};

export default page;