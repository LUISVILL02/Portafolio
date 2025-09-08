import { AchievementsIcon } from '../icons/commonIcons/Achievements';
import { ArrowIcon } from '../icons/commonIcons/ArrowIcon';
import { LocalitationIcon } from '../icons/commonIcons/LocalitationIcon';
import { TaskIcon } from '../icons/commonIcons/TaskIcon';
import './Timeline.css';
import { useState } from 'react';

interface TimelineItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  functions: string[];
  achievements: string[];
  index: number;
}

export const TimelineItem = ({ 
  title, 
  company, 
  location, 
  period, 
  functions, 
  achievements,
  index
}: TimelineItemProps) => {  
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const isOdd = index % 2 === 0; // index 0, 2, 4... son impares

  const toggleExpanded = () => {
    if (isExpanded) {
      setIsCollapsing(true);
      setTimeout(() => {
        setIsExpanded(false);
        setIsCollapsing(false);
      }, 500);
    } else {
      setIsExpanded(true);
    }
  };
  return (
    <div className="timeline-item">
      <div className="timeline-circle"></div>
        <div className={`flex flex-col gap-[10px] bg-black/15 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 relative timeline-content max-w-md min-w-[300px] w-fit ${
        isOdd ? 'mr-8' : 'ml-8'
      }`}>        <div className={`max-w-[200px] w-fit timeline-date inline-block bg-gradient-to-br from-primary to-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/20 ${
          isOdd ? 'ml-auto' : 'ml-0'
        }`}>
          <span>{period}</span>
        </div>
        
        <div>
          <h3 className={`text-xl font-bold text-white mb-2 ${isOdd ? 'text-right' : 'text-left'}`}>{title}</h3>
          <p className={`text-primary font-semibold mb-2 ${isOdd ? 'text-right' : 'text-left'}`}>{company}</p>
          <p className={`flex text-gray-400 text-sm ${isOdd ? 'justify-end' : 'justify-start'}`}>
            <LocalitationIcon/> {location}
          </p>
        </div>        {(isExpanded || isCollapsing) && (
          <div className={isCollapsing ? "timeline-collapsible" : "timeline-expandable"}><div>
              <h4 className={`text-sm font-semibold text-primary mb-2 flex items-center gap-2 ${
                isOdd ? 'justify-end' : 'justify-start'
              }`}>
                <TaskIcon/> Funciones
              </h4>
              <ul className="list-none">
                {functions.map((func, index) => (
                  <li key={index} className={`flex items-start mb-1 text-xs leading-snug text-gray-300 ${
                    isOdd ? 'flex-row-reverse text-right' : 'flex-row text-left'
                  }`}>
                    <span className="hover:text-white transition-colors">{func}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={`text-sm font-semibold text-primary mb-2 flex items-center gap-2 ${
                isOdd ? 'justify-end' : 'justify-start'
              }`}>
                <AchievementsIcon/> Logros
              </h4>
              <ul className="list-none">
                {achievements.map((achievement, index) => (
                  <li key={index} className={`flex items-start mb-1 text-xs leading-snug text-gray-300 ${
                    isOdd ? 'flex-row-reverse text-right' : 'flex-row text-left'
                  }`}>
                    <span className="hover:text-white transition-colors">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}        <button 
          onClick={toggleExpanded}
          className={`bg-transparent border-none text-primary py-2 px-0 text-xs font-semibold cursor-pointer flex items-center gap-2 mt-4 transition-colors hover:text-primary-dark ${
            isOdd ? 'justify-end ml-auto' : 'justify-start ml-0'
          }`}
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
          <span className={`timeline-arrow transition-transform text-xs ${isExpanded ? 'rotate-180' : ''}`}>
            <ArrowIcon/>
          </span>
        </button>
      </div>
    </div>
  );
};
