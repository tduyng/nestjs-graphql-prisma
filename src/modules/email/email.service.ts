import { environment } from '@common/environment';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

import { GeneralContext, PasswordResetContext } from './templates';

type MailOptions = ISendMailOptions & { template?: string };

@Injectable()
export class EmailService {
  constructor(private readonly mailer: MailerService) {}
  //--------------------------------------------------------------------------
  send(options: MailOptions) {
    return this.mailer.sendMail(options);
  }
  //--------------------------------------------------------------------------
  sendGeneral(options: {
    toEmail: string;
    subject: string;
    context: GeneralContext;
  }) {
    return this.send({
      template: 'general',
      to: options.toEmail,
      subject: options.subject,
      context: options.context,
    }).then();
  }

  //--------------------------------------------------------------------------
  // --> Todo:
  // sendVerificationEmail();
  // sendWelcome();
  // sendYouHaveBeenUpdatedPassword()

  sendWelcome(toEmail: string) {
    const env = environment();
    const context: GeneralContext = {
      siteUrl: env.siteUrl,
      hiddenPreheaderText: 'Awsome website',
      header: 'Welcome to our website',
      subHeading: 'Thanks so much for your registration',
      body: 'Main body',
      footerHeader: 'Footer header',
      footerBody: 'Footer body',
    };

    return this.send({
      template: 'general',
      to: toEmail,
      subject: `Welcome to our website.`,
      context,
    }).then();
  }

  //--------------------------------------------------------------------------
  sendPasswordReset(toEmail: string, token: string) {
    const env = environment();
    const context: PasswordResetContext = {
      siteUrl: env.siteUrl,
      resetUrl: `${env.siteUrl}password-reset-confirmation?token=${encodeURI(
        token,
      )}`,
    };

    return this.send({
      template: 'password-reset',
      to: toEmail,
      subject: `Password Reset Request`,
      context,
    }).then();
  }
}
