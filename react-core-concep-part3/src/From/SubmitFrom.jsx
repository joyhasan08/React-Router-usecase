// import { useState } from "react";


const SubmitFrom = () => {
    // const [value, setValue] = useState('')
    const handleOnSubmit = (e) => {
        e.preventDefault(); // prevent from reloading page
        console.log(e.target.name.value);
        e.target.name.value = ''




    }
    return (
        <div >
            <h1> from Submit method   </h1>
            <form className="flex gap-5 justify-center  py-5" onSubmit={handleOnSubmit}>
                <input className="input bg-slate-500" type="text" name="name" />
                <input className="btn" type="submit" value="Submit" name="pass" />

            </form>
        </div>
    );
};

SubmitFrom.propTypes = {

};

export default SubmitFrom;