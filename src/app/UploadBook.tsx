import Link from "next/link";

const UploadBook: React.FC = () => {
    return (
        <Link href="/Upload">
            <button className="padded-btn">Upload Book</button>
        </Link>
    );
};

export default UploadBook;