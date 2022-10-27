import type OnfidoReportBreakdown from '../types/OnfidoReportBreakdown';
import ValidationFailure from '../types/VerificationFailure';

const isFailure = (result: string) => result === 'consider' || result === 'unidentified' || result === 'rejected' || result === 'caution';

const getValidationFailureDetails = (breakdown: OnfidoReportBreakdown | null): ValidationFailure[] => {
  const failures: ValidationFailure[] = [];

  if (!breakdown) {
    return failures;
  }

  if (breakdown.imageIntegrity) {
    if (isFailure(breakdown.imageIntegrity.result)) {
      if (breakdown.imageIntegrity.breakdown?.supportedDocument?.result) {
        failures.push(ValidationFailure.InvalidImageIntegritySupportedDocument);
      }
      if (breakdown.imageIntegrity.breakdown?.imageQuality?.result) {
        failures.push(ValidationFailure.InvalidImageIntegrityImageQuality);
      }
    }
  }

  if (breakdown.visualAuthenticity) {
    if (isFailure(breakdown.visualAuthenticity.result)) {
      failures.push(ValidationFailure.InvalidVisualAuthenticity);

      if (breakdown.visualAuthenticity.breakdown?.faceDetection?.result) {
        failures.push(ValidationFailure.InvalidVisualAuthenticityFaceDetection);
      }
      if (breakdown.visualAuthenticity.breakdown?.fonts?.result) {
        failures.push(ValidationFailure.InvalidVisualAuthenticityFonts);
      }
      if (breakdown.visualAuthenticity.breakdown?.securityFeatures?.result) {
        failures.push(ValidationFailure.InvalidVisualAuthenticitysecurityFeatures);
      }
    }
  }

  return failures;
};

export default getValidationFailureDetails;
