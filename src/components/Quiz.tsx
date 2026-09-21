import { useState } from 'react';
import { useLocation } from 'wouter';
import { QuizOptionCard } from './QuizOptionCard';
import { 
  ChevronLeft, 
  Briefcase, 
  Activity, 
  Footprints, 
  PersonStanding,
  Dumbbell,
  Bike,
  Swords,
  Trophy,
  Target,
  Medal
} from 'lucide-react';

type StepId = 'q1' | 'q2a' | 'q2b';

export function Quiz() {
  const [, setLocation] = useLocation();
  const [currentStepId, setCurrentStepId] = useState<StepId>('q1');
  
  const [q1Answer, setQ1Answer] = useState<string | null>(null);
  const [q2aAnswer, setQ2aAnswer] = useState<string | null>(null);
  const [q2bAnswer, setQ2bAnswer] = useState<string | null>(null);

  const handleNext = () => {
    if (currentStepId === 'q1') {
      if (q1Answer === 'everyday') {
        setCurrentStepId('q2a');
      } else if (q1Answer === 'sports') {
        setCurrentStepId('q2b');
      }
    } else if (currentStepId === 'q2a') {
      if (q2aAnswer) setLocation(`/products/${q2aAnswer}`);
    } else if (currentStepId === 'q2b') {
      if (q2bAnswer) setLocation(`/products/${q2bAnswer}`);
    }
  };

  const handleBack = () => {
    if (currentStepId === 'q2a' || currentStepId === 'q2b') {
      setCurrentStepId('q1');
    }
  };

  // Content for the current step
  const getStepContent = () => {
    switch (currentStepId) {
      case 'q1':
        return {
          title: 'What will you use your Upsteps for?',
          subtitle: 'We\'ll take this into account as we choose materials to make sure you get the right amount of support.',
          content: (
            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md mx-auto">
              <QuizOptionCard
                label="Everyday"
                imageSrc={`${import.meta.env.BASE_URL}images/option-everyday.png`}
                selected={q1Answer === 'everyday'}
                onClick={() => setQ1Answer('everyday')}
                className="w-full sm:w-1/2 aspect-square"
              />
              <QuizOptionCard
                label="Sports"
                imageSrc={`${import.meta.env.BASE_URL}images/option-sports.png`}
                selected={q1Answer === 'sports'}
                onClick={() => setQ1Answer('sports')}
                className="w-full sm:w-1/2 aspect-square"
              />
            </div>
          ),
          hasAnswer: !!q1Answer
        };
      case 'q2a':
        return {
          title: 'How many hours do you spend on your feet each day?',
          subtitle: null,
          content: (
            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md mx-auto">
              <QuizOptionCard
                label="On My Feet All Day"
                icon={<PersonStanding size={48} strokeWidth={1.5} />}
                selected={q2aAnswer === 'on-my-feet-all-day-custom-orthotics'}
                onClick={() => setQ2aAnswer('on-my-feet-all-day-custom-orthotics')}
                className="w-full sm:w-1/2 aspect-square"
              />
              <QuizOptionCard
                label="Normal Everyday Activity"
                icon={<Footprints size={48} strokeWidth={1.5} />}
                selected={q2aAnswer === 'normal-everyday-activity-custom-orthotics'}
                onClick={() => setQ2aAnswer('normal-everyday-activity-custom-orthotics')}
                className="w-full sm:w-1/2 aspect-square"
              />
            </div>
          ),
          hasAnswer: !!q2aAnswer
        };
      case 'q2b':
        return {
          title: 'What sport do you need them for?',
          subtitle: null,
          content: (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <QuizOptionCard
                label="Running"
                icon={<Activity size={40} strokeWidth={1.5} />}
                selected={q2bAnswer === 'running-custom-orthotics'}
                onClick={() => setQ2bAnswer('running-custom-orthotics')}
                className="aspect-square"
              />
              <QuizOptionCard
                label="Fitness Walking and Hiking"
                icon={<Footprints size={40} strokeWidth={1.5} />}
                selected={q2bAnswer === 'hiking-and-fitness-walking-custom-orthotics'}
                onClick={() => setQ2bAnswer('hiking-and-fitness-walking-custom-orthotics')}
                className="aspect-square"
              />
              <QuizOptionCard
                label="Basketball"
                icon={<Trophy size={40} strokeWidth={1.5} />}
                selected={q2bAnswer === 'basketball-custom-orthotics'}
                onClick={() => setQ2bAnswer('basketball-custom-orthotics')}
                className="aspect-square"
              />
              <QuizOptionCard
                label="Cycling"
                icon={<Bike size={40} strokeWidth={1.5} />}
                selected={q2bAnswer === 'cycling-custom-orthotics'}
                onClick={() => setQ2bAnswer('cycling-custom-orthotics')}
                className="aspect-square"
              />
              <QuizOptionCard
                label="Golf"
                icon={<Target size={40} strokeWidth={1.5} />}
                selected={q2bAnswer === 'golf-custom-orthotics'}
                onClick={() => setQ2bAnswer('golf-custom-orthotics')}
                className="aspect-square"
              />
              <QuizOptionCard
                label="Tennis"
                icon={<Medal size={40} strokeWidth={1.5} />}
                selected={q2bAnswer === 'tennis-custom-orthotics'}
                onClick={() => setQ2bAnswer('tennis-custom-orthotics')}
                className="aspect-square"
              />
              <QuizOptionCard
                label="Gym"
                icon={<Dumbbell size={40} strokeWidth={1.5} />}
                selected={q2bAnswer === 'gym-custom-orthotics'}
                onClick={() => setQ2bAnswer('gym-custom-orthotics')}
                className="aspect-square"
              />
              <QuizOptionCard
                label="Multi-Sports"
                icon={<Swords size={40} strokeWidth={1.5} />}
                selected={q2bAnswer === 'multi-sports-custom-orthotics'}
                onClick={() => setQ2bAnswer('multi-sports-custom-orthotics')}
                className="aspect-square"
              />
            </div>
          ),
          hasAnswer: !!q2bAnswer
        };
    }
  };

  const stepInfo = getStepContent();

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col md:flex-row px-6 md:px-10 py-12 md:py-16 gap-12 md:gap-24">
      {/* Left Column: Doctor Info */}
      <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left shrink-0">
        <div className="w-48 h-48 md:w-full md:max-w-[320px] aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-100 shrink-0 shadow-lg">
          <img 
            src={`${import.meta.env.BASE_URL}images/doctor-avatar.png`} 
            alt="Dr. Philip Wells" 
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h3 className="font-bold text-xl text-gray-900 mb-2">Dr. Philip Wells, DPM, FACFAS</h3>
        <div className="relative">
          <span className="text-4xl text-gray-300 absolute -top-4 -left-4 font-serif">"</span>
          <p className="text-gray-700 leading-relaxed text-lg italic">
            I recommend Upstep to patients looking for a more affordable, convenient solution. The process is easy, and the results speak for themselves.
          </p>
        </div>
      </div>

      {/* Right Column: Quiz Content */}
      <div className="w-full md:w-2/3 flex flex-col pt-4">
        {currentStepId !== 'q1' && (
          <button 
            onClick={handleBack}
            className="self-start flex items-center text-gray-500 hover:text-gray-900 transition-colors mb-6 -ml-2"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {stepInfo.title}
          </h1>
          {stepInfo.subtitle && (
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              {stepInfo.subtitle}
            </p>
          )}
        </div>

        <div className="mb-12">
          {stepInfo.content}
        </div>

        <div className="flex justify-center md:justify-start mt-auto md:mt-0">
          <button
            onClick={handleNext}
            disabled={!stepInfo.hasAnswer}
            className={`
              w-full md:w-[240px] py-4 rounded-full text-lg font-bold tracking-wide transition-all
              ${stepInfo.hasAnswer 
                ? 'bg-brand-cyan text-white hover:bg-brand-cyan-hover hover:shadow-lg transform hover:-translate-y-0.5' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
            `}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
