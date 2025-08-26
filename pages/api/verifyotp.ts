import otpStore from '@/lib/otpStore'; // or '../lib/otpStore' depending on your path


export default function handler(req: { method: string; body: { email: any; otp: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: string; message?: string; }): any; new(): any; }; }; }) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST method allowed' });
  }

  const { email, otp } = req.body;

  if (otpStore.get(email) === otp) {
    otpStore.delete(email);
    return res.status(200).json({ message: 'OTP verified' });
  } else {
    return res.status(400).json({ error: 'Invalid OTP' });
  }
}
