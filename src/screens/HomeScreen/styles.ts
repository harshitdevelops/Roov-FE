import { StyleSheet } from 'react-native';
import { borderRadius, colors, spacing, typography } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing['3xl'],
    gap: spacing.xl,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing.base,
  },
  pointsPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.full,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  ctaRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  ctaCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.lg,
  },
  ctaCardPrimary: {
    backgroundColor: colors.primary,
  },
  ctaCardSecondary: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border.default,
  },
  ctaCardPressed: {
    opacity: 0.85,
  },
  ctaIconBadge: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaIconBadgePrimary: {
    backgroundColor: colors.primaryDark,
  },
  ctaIconBadgeSecondary: {
    backgroundColor: colors.surfaceMuted,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  liveRideCard: {
    overflow: 'hidden',
  },
  mapCard: {
    height: 160,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.status.success,
    overflow: 'hidden',
    marginBottom: spacing.base,
  },
  mapRing: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: colors.text.secondary,
    opacity: 0.5,
    top: 20,
    left: -20,
  },
  mapMarker: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 999,
    backgroundColor: colors.status.warning,
    bottom: 10,
    right: 30,
  },
  liveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
    gap: spacing.xxs,
  },
  rideDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  roovMatesRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roovMateAvatar: {
    marginLeft: -spacing.md,
    borderWidth: 2,
    borderColor: colors.background,
  },
  roovMateName: {
    ...typography.caption,
  },
});
