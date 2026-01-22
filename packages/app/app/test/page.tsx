'use client';

export default function TestPage() {
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>✅ Vercel Deployment Works!</h1>
      <p>If you see this, the deployment is successful.</p>
      <p>Time: {new Date().toISOString()}</p>
      <p>Environment: {process.env.NODE_ENV}</p>
    </div>
  );
}
