import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const UNLOCK_TOKEN = 'flitch2025';
const STORAGE_KEY = 'unlocked';

export const useUnlockToken = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const unlockParam = searchParams.get('unlock');
    
    if (unlockParam === UNLOCK_TOKEN) {
      // Save unlock status to localStorage
      localStorage.setItem(STORAGE_KEY, 'true');
      
      // Remove the unlock parameter from URL
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('unlock');
      const newSearch = newParams.toString();
      const newUrl = window.location.pathname + (newSearch ? `?${newSearch}` : '');
      navigate(newUrl, { replace: true });
    }
  }, [searchParams, navigate]);
};

export const isUnlocked = (): boolean => {
  return localStorage.getItem(STORAGE_KEY) === 'true';
};

export const clearUnlock = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
