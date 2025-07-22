function MarketNewsCard({ marketnews }) {
  // Format the Unix timestamp to readable date
  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="card-body">
        {/* Source and Date */}
        <div className="flex justify-between items-center mb-4">
          <div className="badge badge-primary badge-lg">
            {marketnews.source}
          </div>
         
        </div>

        {/* Category Badge */}
        {formatDate(marketnews.datetime) && (
          <div className="mb-3">
            <div className="badge  capitalize">
              {formatDate(marketnews.datetime)}
            </div>
          </div>
        )}

        {/* Headline */}
        <h2 className="card-title text-base-content mb-4 leading-tight line-clamp-3">
          {marketnews.headline}
        </h2>

        {/* Summary */}
        <p className="text-base-content/80 leading-relaxed mb-6 line-clamp-4">
          {marketnews.summary}
        </p>

        {/* Action Button */}
        <div className="card-actions justify-end">
          <a 
            href={marketnews.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm gap-2"
          >
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MarketNewsCard;