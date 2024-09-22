export default function ConfirmDeleteAuthor() {
    const [author, setAuthor] = useState({});
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        findAuthorById(id).then(data => setAuthor(data));
    }, [id]);

    const handleDelete = () => {
        deleteAuthor(id).then(() => history.push("/authors"));
    };

    return (
        <div className="container">
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to delete {author.name}?</p>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            <Link to="/authors" className="btn btn-secondary ms-1">Cancel</Link>
        </div>
    );
}