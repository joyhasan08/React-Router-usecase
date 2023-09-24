

const SubmitFrom = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault(); // prevent from reloading page
        console.log(e.target.name.value);
        console.log("susuususu");
    }
    return (
        <div >
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="name" /> <br />
                <input type="submit" value="Submit" name="pass" /> <br />

            </form>
        </div>
    );
};

SubmitFrom.propTypes = {

};

export default SubmitFrom;