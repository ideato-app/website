import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';

interface ServiceCardProps {
    id: string;
    title: string;
    description: string;
    icon: string;
}

const cardVariants = {
    offscreen: {
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const ServiceCard = ({ id, title, description, icon }: ServiceCardProps) => {
    const cardStyle: React.CSSProperties = {
        background: 'rgba(var(--bg-secondary-rgb), 0.5)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        padding: '2rem',
        textAlign: 'right',
        backdropFilter: 'blur(10px)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        boxShadow: '0 4px 20px rgba(var(--shadow-color), 0.05)',
        display: 'block',
        textDecoration: 'none'
    };

    const iconStyle = {
        fontSize: '2.5rem',
        marginBottom: '1rem',
        display: 'inline-block',
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
        >
            <Link to={`/services/${id}`} style={cardStyle}
                onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(var(--shadow-color), 0.1)';
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                }}
                onMouseOut={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(var(--shadow-color), 0.05)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
            >
                <div style={iconStyle}>{icon}</div>
                <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'var(--text-primary)',
                }}>{title}</h3>
                <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                }}>{description}</p>
            </Link>
        </motion.div>
    );
};

export default ServiceCard;