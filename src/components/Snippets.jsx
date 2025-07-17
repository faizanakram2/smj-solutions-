import React from 'react';

const DifferentiationDiagram = () => {
  return (
    <section style={{ backgroundColor: 'black' }} className="differentiation-diagram">
      <img
        src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6772932a2e85b3c5c5490f59_Mobile%20Dev-100.jpg"
        loading="lazy"
        alt="Mobile Development Diagram"
        sizes="100vw"
        srcSet="
          https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6772932a2e85b3c5c5490f59_Mobile%20Dev-100-p-500.jpg 500w,
          https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6772932a2e85b3c5c5490f59_Mobile%20Dev-100-p-800.jpg 800w,
          https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6772932a2e85b3c5c5490f59_Mobile%20Dev-100-p-1080.jpg 1080w,
          https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6772932a2e85b3c5c5490f59_Mobile%20Dev-100-p-1600.jpg 1600w,
          https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6772932a2e85b3c5c5490f59_Mobile%20Dev-100.jpg 1921w
        "
        className="full-image is-diagram"
      />
    </section>
  );
};

export default DifferentiationDiagram;
