import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { forwardRef, Inject, Logger } from '@nestjs/common';
import { MailService } from 'src/modules/mail/mail.service';

@Processor('mail')
export class MailProcessor {
  private readonly logger = new Logger(MailProcessor.name);
  @Inject(forwardRef(() => MailService))
  private readonly mailService: MailService;

  @Process('sendVerifyEmail')
  async sendVerifyEmail(job: Job): Promise<number> {
    this.logger.debug('Start job: sendVerifyEmail');
    const { email, verifyEmailUrl } = job.data;
    try {
      await this.mailService.sendVerifyEmail(email, verifyEmailUrl);
    } catch (e) {
      this.logger.debug(e);
    }
    this.logger.debug('Done job: sendVerifyEmail');
    return 1;
  }

  @Process('sendPasswordChangedEmail')
  async sendPasswordChangedEmail(job: Job): Promise<number> {
    this.logger.debug('Start job: sendPasswordChangedEmail');
    const { email } = job.data;
    try {
      await this.mailService.sendPasswordChangedEmail(email);
    } catch (e) {
      this.logger.debug(e);
    }
    this.logger.debug('Done job: sendPasswordChangedEmail');
    return 1;
  }

  @Process('sendUserConfirmation')
  async sendUserConfirmation(job: Job): Promise<number> {
    this.logger.debug('Start job: sendUserConfirmation');
    const { user, token } = job.data;
    try {
      await this.mailService.sendUserConfirmation(user, token);
    } catch (e) {
      this.logger.debug(e);
    }
    this.logger.debug('Done job: sendUserConfirmation');
    return 1;
  }

  @Process('sendForgotPasswordEmail')
  async sendForgotPasswordEmail(job: Job): Promise<number> {
    this.logger.debug('Start job: sendForgotPasswordEmail');
    const { email, token } = job.data;
    try {
      await this.mailService.sendForgotPasswordEmail(email, token);
    } catch (e) {
      this.logger.debug(e);
    }
    this.logger.debug('Done job: sendForgotPasswordEmail');
    return 1;
  }

  @Process('sendPasswordAdminEmail')
  async sendPasswordAdminEmail(job: Job): Promise<number> {
    this.logger.debug('Start job: sendPasswordAdminEmail');
    const { email, password } = job.data;
    try {
      await this.mailService.sendPasswordAdminEmail(email, password);
    } catch (e) {
      this.logger.debug(e);
    }
    this.logger.debug('Done job: sendPasswordAdminEmail');
    return 1;
  }

  @Process('sendMailDisableAccount')
  async sendMailDisableAccount(job: Job): Promise<number> {
    this.logger.debug('Start job: sendMailDisableAccount');
    const { email } = job.data;
    try {
      await this.mailService.sendMailDisableAccount(email);
    } catch (e) {
      this.logger.debug(e);
    }
    this.logger.debug('Done job: sendMailDisableAccount');
    return 1;
  }

  @Process('sendMailEnableAccount')
  async sendMailEnableAccount(job: Job): Promise<number> {
    this.logger.debug('Start job: sendMailEnableAccount');
    const { email } = job.data;
    try {
      await this.mailService.sendMailEnableAccount(email);
    } catch (e) {
      this.logger.debug(e);
    }
    this.logger.debug('Done job: sendMailEnableAccount');
    return 1;
  }

  @Process('sendApproveUserEmail')
  async sendApproveUserEmail(job: Job): Promise<number> {
    this.logger.debug('Start job: sendApproveUserEmail');
    const { email } = job.data;
    try {
      await this.mailService.sendApproveUserEmail(email);
    } catch (e) {
      this.logger.debug(e);
    }
    this.logger.debug('Done job: sendApproveUserEmail');
    return 1;
  }

  @Process('sendRejectUserEmail')
  async sendRejectUserEmail(job: Job): Promise<number> {
    this.logger.debug('Start job: sendRejectUserEmail');
    const { email } = job.data;
    try {
      await this.mailService.sendRejectUserEmail(email);
    } catch (e) {
      this.logger.debug(e);
    }
    this.logger.debug('Done job: sendRejectUserEmail');
    return 1;
  }

  @Process('sendTestEmail')
  async sendTestEmail(job: Job): Promise<number> {
    this.logger.debug('Start job: sendTestEmail');
    const { email, subject, body } = job.data;
    try {
      await this.mailService.sendTestEmail(email, subject, body);
    } catch (e) {
      this.logger.debug(e);
    }
    this.logger.debug('Done job: sendTestEmail');
    return 1;
  }
}
