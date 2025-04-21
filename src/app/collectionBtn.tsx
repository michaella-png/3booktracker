import Link from "next/link";

const CollectionPage: React.FC = () => {
    return (
        <Link href="/Collection">
            <button className="padded-btn">Collection Page</button>
        </Link>
    );
};

export default CollectionPage;