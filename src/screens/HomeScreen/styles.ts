import { StyleSheet } from 'react-native';
import { borderRadius, colors, spacing, typography } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.secondary,
  },
  header: {
    paddingTop: spacing.base,
    paddingHorizontal: spacing.base,
    paddingBottom: 24,
    zIndex: 2,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIdentity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  sheet: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: borderRadius['2xl'],
    borderTopRightRadius: borderRadius['2xl'],
    overflow: 'hidden',
    zIndex: 2,
  },
  sheetScroll: {
    flex: 1,
    paddingTop: spacing.xl,
  },
  scrollContent: {
    gap: spacing.xl,
    backgroundColor: colors.background,
    paddingBottom: spacing.xl,
  },
  section: {
    paddingHorizontal: spacing.base,
    backgroundColor: colors.background,
  },
  pointsPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: spacing.xs,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.full,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    marginTop: spacing.sm,
  },
  ctaRow: {
    flexDirection: 'row',
    gap: spacing.md,
    paddingHorizontal: spacing.base,
    marginTop: spacing.sm,
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
