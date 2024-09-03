import { type FC } from 'react';

import { cn } from '@repo/ui/cn';
import { Tooltip, TooltipContent, TooltipTrigger } from '@repo/ui/components/tooltip';
import { Text } from '@repo/ui/components/typography/typography';

import { toast } from '@repo/ui/components/use-toast';
import {
  HolidayBronzeBadge,
  HolidayGoldBadge,
  HolidayPlatinumBadge,
  HolidaySilverBadge,
} from '../badges/aot-2023-badge';
import { type BadgeInfo } from './_actions';

export const SlugToBadgeIcon: Record<BadgeInfo['slug'], FC<{ className: string }>> = {
  'aot-2023-bronze': HolidayBronzeBadge,
  'aot-2023-silver': HolidaySilverBadge,
  'aot-2023-gold': HolidayGoldBadge,
  'aot-2023-platinum': HolidayPlatinumBadge,
};

const Badge = ({ slug, name }: BadgeInfo) => {
  const Icon = SlugToBadgeIcon[slug];

  if (Icon === undefined) return null;

  return (
    <Tooltip>
      <TooltipTrigger>
        <span
          onClick={(e) => {
            navigator.clipboard.writeText(e.currentTarget.innerHTML);
            toast({
              title: 'Copied to clipboard',
              variant: 'success',
            });
          }}
        >
          <Icon className="h-12 w-12" />
        </span>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <span>{name}</span>
      </TooltipContent>
    </Tooltip>
  );
};

interface BadgesProps {
  badges: BadgeInfo[];
  className?: string;
}

export const Badges = ({ badges, className }: BadgesProps) => {
  if (badges.length === 0) return null;

  return (
    <div className={cn('flex flex-col gap-4 border-border border-t py-4', className)}>
      <Text intent="leading">Badges</Text>
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <Badge key={badge.slug} {...badge} />
        ))}
      </div>
    </div>
  );
};
