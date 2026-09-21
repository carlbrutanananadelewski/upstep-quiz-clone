import { useState } from 'react';
import { QuizOptionCard } from './QuizOptionCard';
import { useLocation } from 'wouter';

type QuizData = {
  usage?: string;
  shoeType?: string;
  painType?: string;
  gender?: string;
};

const STEPS = [
  {
    id: 'usage',
    title: 'What will you use your Upsteps for?',
    subtitle: 'We\'ll take this into account as we choose materials to make sure you get the right\namount of support.',
    options: [
      { id: 'everyday', label: 'Everyday', image: 'option-everyday.png' },
      { id: 'sports', label: 'Sports', image: 'option-sports.png' },
    ]
  },
  {
    id: 'shoeType',
    title: 'What type of shoe will you wear them in?',
    subtitle: 'We customize the fit based on your primary footwear to ensure maximum comfort.',
    options: [
      { id: 'sneakers', label: 'Sneakers', image: 'option-sneakers.png' },
      { id: 'boots', label: 'Boots', image: 'option-boots.png' },
      { id: 'dress', label: 'Dress Shoes', image: 'option-dress.png' },
    ]
  },
  {
    id: 'painType',
    title: 'Do you experience any specific foot pain?',
    subtitle: 'Select the condition that best matches how you feel.',
    options: [
      { id: 'plantar', label: 'Plantar Fasciitis', image: null },
      { id: 'flat_feet', label: 'Flat Feet', image: null },
      { id: 'heel_pain', label: 'Heel Pain', image: null },
      { id: 'none', label: 'No Pain', image: null },
    ]
  },
  {
    id: 'gender',
    title: 'Who are these for?',
    subtitle: 'This helps us size the custom orthotics correctly.',
    options: [
      { id: 'men', label: 'Men', image: null },
      { id: 'women', label: 'Women', image: null },
    ]
  }
];

export function Quiz() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [data, setData] = useState<QuizData>({});
  const [, setLocation] = useLocation();

  const currentStep = STEPS[currentStepIndex];
  const isLastStep = currentStepIndex === STEPS.length - 1;
  const currentAnswer = data[currentStep.id as keyof QuizData];

  const handleSelect = (optionId: string) => {
    setData(prev => ({ ...prev, [currentStep.id]: optionId }));
  };

  const handleNext = () => {
    if (!currentAnswer) return;
    
    if (isLastStep) {
      setLocation('/result');
    } else {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '80px 20px 40px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      
      <div style={{
        textAlign: 'center',
        marginBottom: '48px',
        maxWidth: '600px'
      }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 700,
          color: '#111',
          marginBottom: '20px',
          letterSpacing: '-0.5px'
        }}>
          {currentStep.title}
        </h1>
        {currentStep.subtitle && (
          <p style={{
            fontSize: '16px',
            color: '#777',
            lineHeight: 1.5,
            fontWeight: 400,
            whiteSpace: 'pre-line'
          }}>
            {currentStep.subtitle}
          </p>
        )}
      </div>

      <div style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '64px'
      }}>
        {currentStep.options.map(opt => (
          <QuizOptionCard
            key={opt.id}
            label={opt.label}
            imageSrc={opt.image ? `${import.meta.env.BASE_URL}images/${opt.image}` : undefined}
            selected={currentAnswer === opt.id}
            onClick={() => handleSelect(opt.id)}
          />
        ))}
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        width: '100%',
      }}>
        <button
          onClick={handleNext}
          disabled={!currentAnswer}
          style={{
            backgroundColor: '#7ce0ff',
            color: '#fff',
            padding: '14px 0',
            width: '180px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '0.5px',
            transition: 'background-color 0.2s, opacity 0.2s',
            opacity: currentAnswer ? 1 : 0.5,
            cursor: currentAnswer ? 'pointer' : 'not-allowed'
          }}
        >
          NEXT
        </button>

        {currentStepIndex > 0 && (
          <button
            onClick={handleBack}
            style={{
              color: '#999',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'underline',
              cursor: 'pointer',
              marginTop: '4px'
            }}
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
}
