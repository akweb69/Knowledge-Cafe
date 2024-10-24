
import profile from "../assets/boy1.png"

const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center py-4 border-b-2 border-blue-300">
            <h1 className="text-2xl md:text-4xl font-bold">Ready To Read</h1>
            <img className="w-12 rounded-full profile1 cursor-pointer" src={profile} alt="" />
        </div>
    );
};

export default Navbar;  