const variants = {
  primary:
    'bg-secondary text-slate-950 hover:bg-white focus-visible:ring-secondary',
  secondary:
    'border border-secondary/60 text-secondary hover:bg-secondary/10 focus-visible:ring-secondary',
  ghost:
    'border border-white/10 text-primary hover:border-secondary/50 hover:bg-white/5 focus-visible:ring-secondary',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Component = 'button',
  ...props
}) => {
  return (
    <Component
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
