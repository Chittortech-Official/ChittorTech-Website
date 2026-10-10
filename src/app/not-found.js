import Link from "next/link";
import "../../public/assets/css/premium-products.css";

export const metadata = {
  title: "404 - Page Not Found | ChittorTech",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <style>{`
        .premium-404-container {
            position: relative;
            min-height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0f172a;
            overflow: hidden;
            font-family: 'Raleway', sans-serif;
            color: #fff;
            padding: 60px 20px;
        }
        .bg-blobs {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
            overflow: hidden;
        }
        .blob {
            position: absolute;
            filter: blur(80px);
            opacity: 0.5;
            animation: floatBlob 12s infinite alternate ease-in-out;
        }
        .blob-1 {
            width: 40vw;
            height: 40vw;
            background: #e06930;
            top: -10%;
            left: -10%;
            animation-delay: 0s;
        }
        .blob-2 {
            width: 35vw;
            height: 35vw;
            background: #4576ba;
            bottom: -10%;
            right: -10%;
            animation-delay: -5s;
        }
        .blob-3 {
            width: 30vw;
            height: 30vw;
            background: #291fbc;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation-duration: 18s;
        }
        @keyframes floatBlob {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(30px, 50px) scale(1.1); }
        }
        .content-wrapper {
            position: relative;
            z-index: 10;
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 30px;
            padding: 50px 40px;
            text-align: center;
            max-width: 700px;
            width: 100%;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        .clean-404-text {
            font-size: 140px;
            font-weight: 900;
            line-height: 1;
            margin: 0;
            background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
            margin-bottom: 10px;
        }
        .title-text {
            font-size: 30px;
            font-weight: 800;
            margin-bottom: 15px;
            letter-spacing: -0.5px;
            color: #f8fafc;
        }
        .desc-text {
            font-size: 16px;
            color: #cbd5e1;
            line-height: 1.7;
            margin-bottom: 30px;
            max-width: 550px;
            margin-left: auto;
            margin-right: auto;
        }
        .notification-box {
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.3);
            border-radius: 20px;
            padding: 25px;
            max-width: 550px;
            margin: 0 auto 30px auto;
            color: #34d399;
            font-size: 15px;
            line-height: 1.6;
            font-weight: 500;
        }
        .notification-box i {
            font-size: 24px;
            margin-bottom: 10px;
            display: block;
            color: #10b981;
        }
        .btn-wrapper {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
        }
        .btn-action {
            padding: 14px 32px;
            border-radius: 30px;
            font-weight: 700;
            text-decoration: none;
            font-size: 15px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: inline-flex;
            align-items: center;
            gap: 10px;
            border: none;
            cursor: pointer;
        }
        .btn-home-action {
            background: #ffffff;
            color: #0f172a;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        .btn-home-action:hover {
            background: #f8fafc;
            transform: translateY(-4px);
            color: #000;
        }
        @media(max-width: 575px) {
            .clean-404-text { font-size: 100px; }
            .title-text { font-size: 24px; }
            .content-wrapper { padding: 40px 20px; }
            .btn-action { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="premium-404-container">
        <div className="bg-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

        <div className="content-wrapper">
          <h1 className="clean-404-text">404</h1>
          <h2 className="title-text">Page Not Found</h2>

          <p className="desc-text">
            It seems the page or link you clicked doesn&apos;t exist or has been moved.
          </p>

          <div className="notification-box">
            <i className="fa-solid fa-circle-check"></i>
            Please check the URL or return to our homepage to explore our AI & IT solutions.
          </div>

          <div className="btn-wrapper mt-4">
            <Link href="/" className="btn-action btn-home-action">
              <i className="fa-solid fa-house"></i> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
