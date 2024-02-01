import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <SwitchPrimitives.Root
      className={cn(
        'peer inline-flex h-10 w-20 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white data-[state=unchecked]:bg-black ',
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none block h-8 w-8 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-10 data-[state=unchecked]:translate-x-1 bg-firstAccent'
        )}
      />
    </SwitchPrimitives.Root>
  </>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
