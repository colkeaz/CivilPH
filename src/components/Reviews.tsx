import React, { useState } from 'react';
import '../styles/Reviews.css';

interface ReviewProps {
  id: string;
  clientName: string;
  rating: number;
  date: string;
  comment: string;
}

export const ReviewCard: React.FC<ReviewProps> = ({ clientName, rating, date, comment }) => {
  return (
    <div className="review-card card">
      <div className="review-header">
        <div className="review-meta">
          <span className="reviewer-name">{clientName}</span>
          <span className="review-date">{date}</span>
        </div>
        <div className="review-rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
          ))}
        </div>
      </div>
      <p className="review-comment">{comment}</p>
    </div>
  );
};

export const ReviewForm: React.FC<{ engineerId: string; onSubmit: () => void }> = ({ engineerId, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    // Mock API call
    console.log('Submitting review for engineer', engineerId, { rating, comment });
    onSubmit();
  };
  
  return (
    <form className="review-form card" onSubmit={handleSubmit}>
      <h3>Write a Review</h3>
      <div className="form-group">
        <label>Rating</label>
        <div className="rating-select">
          {[1, 2, 3, 4, 5].map(star => (
            <span 
              key={star} 
              className={`star-select ${star <= rating ? 'filled' : ''}`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <div className="form-group">
        <label>Comment</label>
        <textarea 
          className="input-field" 
          rows={4} 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience working with this engineer..."
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary" disabled={rating === 0}>Submit Review</button>
    </form>
  );
};
