import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const UNLOCK_TOKEN = 'flitch2025';
const STORAGE_KEY = 'unlocked';

interface UnlockHandlerProps {
  onUnlock: () => void;
}

const UnlockHandler = ({ onUnlock }: UnlockHandlerProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const unlockParam = searchParams.get('unlock');
    
    if (unlockParam === UNLOCK_TOKEN) {
      // Save unlock status to localStorage
      localStorage.setItem(STORAGE_KEY, 'true');
      
      // Trigger unlock callback
      onUnlock();
      
      // Remove the unlock parameter from URL
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('unlock');
      const newSearch = newParams.toString();
      const newUrl = window.location.pathname + (newSearch ? `?${newSearch}` : '');
      navigate(newUrl, { replace: true });
    }
  }, [searchParams, navigate, onUnlock]);

  return null;
};

export default UnlockHandler;
