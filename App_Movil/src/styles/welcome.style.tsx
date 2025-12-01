import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  header: {
    height: 250,
    position: "relative",
  },
  headerImage: {
    ...StyleSheet.absoluteFillObject,
  },
  headerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.9)",
    textAlign: "center",
    marginTop: 4,
  },
  main: {
    padding: 50,
  },
  section: {
    marginBottom: 20,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E293B",
  },
  sectionText: {
    fontSize: 14,
    color: "#475569",
    textAlign: "center",
    marginTop: 4,
  },
  feature: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E293B",
  },
  featureText: {
    fontSize: 14,
    color: "#475569",
  },
  primaryButton: {
    flexDirection: "row",
    backgroundColor: "#059669",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },

  primaryButtonText: {
    color: "white",
    fontWeight: "bold",
    marginRight: 8,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#059669",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  secondaryButtonText: {
    color: "#059669",
    fontWeight: "bold",
  },
  footerText: {
    textAlign: "center",
    color: "#64748B",
    marginTop: 12,
  },
});