// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getOnfido } from '../../helpers/onfido';
const { OnfidoApiError } = require('@onfido/api');

const reportNames = [
  'document',
  // 'document_with_address_information',
  // 'document_with_driving_licence_information',
  // 'facial_similarity_photo',
  // 'facial_similarity_video',
  // 'known_faces',
  // 'identity_enhanced',
  // 'watchlist_enhanced',
  // 'watchlist_standard',
  // 'watchlist_peps_only',
  // 'watchlist_sanctions_only',
  // 'proof_of_address',
  // 'right_to_work'
];
const tags = ['edu', 'fellowship']; // TODO: What will provide these?

type ApplicantTokenPair = {
  applicantId: string;
  sdkToken: string;
};

const onfido = getOnfido();

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApplicantTokenPair>) {
  const applicantId = '05b2947a-57d8-47f2-bd99-d31389d7b0ce'; // TODO get from request
  try {
    const check = await onfido.check.create({
      // https://documentation.onfido.com/#check-object
      applicantId,
      reportNames,
      tags,
    });

    console.log({ check });
    res.status(200).json(check);
  } catch (error: any) {
    if (error instanceof OnfidoApiError) {
      // An error response was received from the Onfido API, extra info is available.
      console.error(error.message);
      console.error(error.type);
      console.error(error.isClientError());
    } else {
      // No response was received for some reason e.g. a network error.
      console.error({ error });
    }
    res.status(500).json(error);
  }
}
