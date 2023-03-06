class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new
    can :read, Doctor
    return unless user.present?

    can(%i[read create], Appointment, user:)
    return unless user.admin?

    can :manage, :all
  end
end
