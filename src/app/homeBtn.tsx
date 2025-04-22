import Link from "next/link";

const HomePage: React.FC = () => {
    return (
        <Link href="/">
            <button className="padded-btn">Home page</button>
        </Link>
    );
};

export default HomePage;