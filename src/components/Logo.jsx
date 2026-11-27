export default function Logo() {
  return (
    <a className="logo logo-official" href="#top" aria-label="QAF Alliance, back to top">
      <div className="logo-official__frame">
        <img
          src="/images/qaf-alliance-logo-transparent.png"
          alt="QAF ALLIANCE"
          className="logo-official__img"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = '/images/qaf-alliance-logo.jpg'
          }}
        />
        <div className="logo-official__glow" aria-hidden="true" />
      </div>
    </a>
  )
}
