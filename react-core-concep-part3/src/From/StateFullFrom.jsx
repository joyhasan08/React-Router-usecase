

const StateFullFrom = () => {
    return (
        <div className='  '>

            <h1 className=" text-xl py-2 font-semibold">Methode 2</h1>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5 justify-center">
                <input className="input bg-slate-500" type="text" name='userName' placeholder="  userName" />
                <input className="input bg-slate-500" type="email" name="email" id="" placeholder="  email" />
                <input className="input bg-slate-500" type="password" name="password" id="" placeholder="  password" />
                <input className="btn" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateFullFrom;