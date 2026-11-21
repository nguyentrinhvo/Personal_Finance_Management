import React from 'react';
import { Clock } from 'lucide-react';

const ColdStartNotice = ({ isWakingUp = false }) => {
  return (
    <div
      className={`flex items-start gap-3 p-3.5 rounded-2xl border text-xs leading-relaxed transition-colors ${
        isWakingUp
          ? 'bg-orange-50 border-orange-200 text-[#8a3000]'
          : 'bg-amber-50/70 border-amber-200/70 text-amber-900/90'
      }`}
    >
      <Clock
        size={16}
        className={`shrink-0 mt-0.5 ${
          isWakingUp ? 'text-[#a33900] animate-pulse' : 'text-amber-600'
        }`}
      />
      <p className="font-medium">
        {isWakingUp ? (
          <>
            <span className="font-bold">Waking up database...</span> Our free-tier TiDB Cloud
            database is starting from sleep mode. Please wait a few seconds.
          </>
        ) : (
          <>
            <span className="font-bold">First-time notice:</span> Our free-tier database (TiDB
            Cloud) may enter sleep mode when idle. Your first request might take 5–15 seconds to
            wake up.
          </>
        )}
      </p>
    </div>
  );
};

export default ColdStartNotice;
