export interface QuizOptionCardProps {
  label: string;
  imageSrc?: string;
  selected: boolean;
  onClick: () => void;
}

export function QuizOptionCard({ label, imageSrc, selected, onClick }: QuizOptionCardProps) {
  return (
    <button
      onClick={onClick}
      className="card-hover"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '176px',
        height: '165px',
        backgroundColor: selected ? '#f0f9ff' : '#f5f7f9',
        borderRadius: '16px',
        padding: '16px 12px',
        border: selected ? '2px solid #7ce0ff' : '2px solid transparent',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
      }}
    >
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', paddingBottom: '12px' }}>
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={label} 
            style={{ 
              maxWidth: '120px', 
              maxHeight: '85px', 
              objectFit: 'contain' 
            }} 
          />
        ) : (
          <div style={{ width: '70px', height: '70px', backgroundColor: '#e5e7eb', borderRadius: '50%' }} />
        )}
      </div>
      <div style={{
        backgroundColor: '#fff',
        color: selected ? '#7ce0ff' : '#6b7280',
        borderRadius: '99px',
        padding: '6px 20px',
        fontSize: '14px',
        fontWeight: 600,
        width: '85%',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
      }}>
        {label}
      </div>
    </button>
  );
}
