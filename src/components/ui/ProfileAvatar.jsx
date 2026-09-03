import { useState } from 'react';
import { profile } from '../../data/profile';

const ProfileAvatar = ({ size = 'lg', className = '' }) => {
  const [hasError, setHasError] = useState(false);

  const sizeClasses =
    size === 'sm'
      ? 'h-12 w-12 text-sm'
      : size === 'md'
        ? 'h-24 w-24 text-xl'
        : 'h-40 w-40 text-3xl sm:h-48 sm:w-48 sm:text-4xl';

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center rounded-full bg-linear-to-br from-secondary/30 to-zinc-800/60 font-bold text-white ring-2 ring-secondary/40 ${sizeClasses} ${className}`}
        aria-hidden="true"
      >
        {profile.initials}
      </div>
    );
  }

  return (
    <img
      src={profile.profileImage}
      alt={`${profile.name} profile`}
      onError={() => setHasError(true)}
      className={`rounded-full object-cover ring-2 ring-secondary/40 ${sizeClasses} ${className}`}
    />
  );
};

export default ProfileAvatar;
