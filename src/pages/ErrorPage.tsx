import { useRouteError, Link } from 'react-router-dom';

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id="error-page" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)'
        }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Oops!</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Sorry, an unexpected error has occurred.</p>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                <i>{error.status} {error.statusText || error.message}</i>
            </p>
            <Link to="/" style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                backgroundColor: 'var(--accent-primary)',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold'
            }}>Go back to Home</Link>
        </div>
    );
} 